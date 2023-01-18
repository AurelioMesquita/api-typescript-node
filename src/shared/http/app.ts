import "dotenv/config";
import server from "./index";

server.listen(process.env.PORT, () => {
    console.log("running");
});
