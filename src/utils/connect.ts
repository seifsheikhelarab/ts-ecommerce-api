import mongoose from "mongoose";
import config from "config";
import log from "./logger";

function connect() {
    const dbUri = config.get<string>("dbUri");
    return mongoose.connect(dbUri)
        .then(() => log.info(`Connected to ${dbUri}`))
        .catch((error) => {
            log.error("Error connecting to database: ", error);
            process.exit(1);
        });
}

export default connect;