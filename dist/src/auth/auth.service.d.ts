import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            login: string;
            email: string;
            avatarUrl: string | null;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            login: string;
            email: string;
            avatarUrl: string | null;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
        };
    }>;
    refreshTokens(userId: number): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    private generateTokens;
}
