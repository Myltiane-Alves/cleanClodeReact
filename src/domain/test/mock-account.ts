import { AuthenticationParams } from "@/domain/useCases";
import { AccountModel } from "../models";
import  faker from "faker";

export const mockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(),
    password: faker.internet.password()
});

export const mockAccountModel = (): AccountModel => ({
    accessToken: faker.random.uuid()
});