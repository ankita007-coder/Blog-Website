import { StatusCodes } from "http-status-codes";

const errorMiddleware = (err, req, res,next) => {
        const statusCodes = err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR
        const msg = err.message|| "Something went wrong"
        res.status(statusCodes).json({msg})
}

export default errorMiddleware;