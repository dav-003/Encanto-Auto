export enum SignInInputNames {
    Email = "email",
    Password = "password"
}

export interface SignUpData {
    email ?: string;
    password ?: string;
    confirmPassword ?: string; 
}

export interface SignInData {
    email : string;
    password : string;
}