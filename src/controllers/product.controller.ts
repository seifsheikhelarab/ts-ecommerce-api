import { Request, Response } from 'express';
import { pick } from 'lodash';
import { CreateProductInput, UpdateProductInput } from '../schema/product.schema';
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from '../service/product.service';

export async function createProductHandler(req: Request<{}, {}, CreateProductInput['body']>,res: Response) {
    const userId = res.locals.user._id.toString();
    const body = req.body;
    const product = await createProduct({ ...body, user: userId });
    res.send(product);
}


export async function updateProductHandler(req: Request<UpdateProductInput['params']>, res: Response) {
    const userId = res.locals.user._id.toString();
    const productId = req.params.productId;
    const update = req.body;

    const product = await findProduct({productId})
    if(!product){
        res.sendStatus(404);
    }

    if(String(product?.user)!==userId){
        res.sendStatus(403);
    }

    const updatedProduct = await findAndUpdateProduct({productId}, update, {new: true});
    res.send(updatedProduct);

}

export async function getProductHandler(req: Request<UpdateProductInput['params']>, res: Response) {
    const productId = req.params.productId;
    const product = await findProduct({productId});
    if(!product){
      res.sendStatus(404);
  }
      res.send(product);
  
}

export async function deleteProductHandler(req: Request<UpdateProductInput['params']>, res: Response) {
    const userId = res.locals.user._id.toString();
    const productId = req.params.productId;

    const product = await findProduct({productId})
    if(!product){
        res.sendStatus(404);
    }

    if(String(product?.user)!==userId){
        res.sendStatus(403);
    }

    await deleteProduct({productId});
    res.sendStatus(200);
}