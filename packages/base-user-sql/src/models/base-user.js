"use strict";
/**
 * Base user definition
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUser = void 0;
/* eslint-disable indent */
const typeorm_1 = require("typeorm");
let BaseUser = class BaseUser {
};
exports.BaseUser = BaseUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], BaseUser.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], BaseUser.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], BaseUser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password', type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], BaseUser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], BaseUser.prototype, "createdAt", void 0);
exports.BaseUser = BaseUser = __decorate([
    (0, typeorm_1.Entity)('users')
], BaseUser);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZS11c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7O0FBRUgsMkJBQTJCO0FBQzNCLHFDQUFpRTtBQUcxRCxJQUFNLFFBQVEsR0FBZCxNQUFNLFFBQVE7Q0FXcEIsQ0FBQTtBQVhZLDRCQUFRO0FBRW5CO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O3FDQUNuQjtBQUVaO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7c0NBQzlDO0FBRWI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzt1Q0FDOUM7QUFFZDtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7OzBDQUM5QztBQUVqQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs4QkFDRSxJQUFJOzJDQUFDO21CQVZMLFFBQVE7SUFEcEIsSUFBQSxnQkFBTSxFQUFDLE9BQU8sQ0FBQztHQUNILFFBQVEsQ0FXcEIifQ==