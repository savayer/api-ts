export default interface ApiResponse {
    new (response: Response);
    getData (): object;
    getStatus (): Number;
    getHeaders (): Headers;
}