import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { InvalidCredntialsError } from "@/domain/erros/invalid-credentials.error";
import { UnexpectedError } from "@/domain/erros/unexpected-error";
import { AuthenticationParams } from "@/domain/useCases/authentication";


export class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient
        
    ) {}

    async auth (params: AuthenticationParams): Promise<void> {
        const httpResponse = await this.httpPostClient.post({
           url: this.url,
           body: params
        });

        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: break
            case HttpStatusCode.unathorized: throw new InvalidCredntialsError();
            default: throw new UnexpectedError();
        }
    }
}