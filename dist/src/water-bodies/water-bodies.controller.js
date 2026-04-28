"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterBodiesController = void 0;
const common_1 = require("@nestjs/common");
const water_bodies_service_1 = require("./water-bodies.service");
const water_body_dto_1 = require("./dto/water-body.dto");
const measurement_dto_1 = require("./dto/measurement.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let WaterBodiesController = class WaterBodiesController {
    waterBodiesService;
    constructor(waterBodiesService) {
        this.waterBodiesService = waterBodiesService;
    }
    findAll() {
        return this.waterBodiesService.findAll();
    }
    findOne(id) {
        return this.waterBodiesService.findOne(id);
    }
    create(dto) {
        return this.waterBodiesService.create(dto);
    }
    update(id, dto) {
        return this.waterBodiesService.update(id, dto);
    }
    remove(id) {
        return this.waterBodiesService.remove(id);
    }
    getMeasurements(id) {
        return this.waterBodiesService.getMeasurements(id);
    }
    addMeasurement(id, dto) {
        return this.waterBodiesService.addMeasurement(id, dto);
    }
    updateMeasurement(id, measurementId, dto) {
        return this.waterBodiesService.updateMeasurement(id, measurementId, dto);
    }
    removeMeasurement(id, measurementId) {
        return this.waterBodiesService.removeMeasurement(id, measurementId);
    }
};
exports.WaterBodiesController = WaterBodiesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WaterBodiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WaterBodiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [water_body_dto_1.CreateWaterBodyDto]),
    __metadata("design:returntype", void 0)
], WaterBodiesController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, water_body_dto_1.UpdateWaterBodyDto]),
    __metadata("design:returntype", void 0)
], WaterBodiesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WaterBodiesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/measurements'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WaterBodiesController.prototype, "getMeasurements", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)(':id/measurements'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, measurement_dto_1.CreateMeasurementDto]),
    __metadata("design:returntype", void 0)
], WaterBodiesController.prototype, "addMeasurement", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Patch)(':id/measurements/:measurementId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('measurementId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, measurement_dto_1.UpdateMeasurementDto]),
    __metadata("design:returntype", void 0)
], WaterBodiesController.prototype, "updateMeasurement", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Delete)(':id/measurements/:measurementId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('measurementId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], WaterBodiesController.prototype, "removeMeasurement", null);
exports.WaterBodiesController = WaterBodiesController = __decorate([
    (0, common_1.Controller)('water-bodies'),
    __metadata("design:paramtypes", [water_bodies_service_1.WaterBodiesService])
], WaterBodiesController);
//# sourceMappingURL=water-bodies.controller.js.map