export default interface ResponseInterface {
    sucess: boolean,
    code: string | null,
    data: string | Array<any> | null,
    message: string | null
}