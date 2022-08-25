import express from "express";

import { router } from "./routes";

// import { categoriesRoutes } from "./routes/categories.routes";
// import { specificationsRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());
app.use(router);
// app.use("/categories", categoriesRoutes);
// app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is running!"));
