import { app } from './app'
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(async () => {
        console.log("Database Connected!")

    const PORT: string | 3000 = process.env.PORT! || 3000
    app.listen(PORT, () => {
        console.log(`App is running on https://localhost:${PORT}`);
        })
    })
    .catch((err: string) => console.log(err))
