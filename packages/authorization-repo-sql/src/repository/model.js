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
Object.defineProperty(exports, "__esModule", { value: true });
exports.rulesModel = exports.Acl = exports.Rbac = exports.ModelType = void 0;
/* eslint-disable indent */
const typeorm_1 = require("typeorm");
var ModelType;
(function (ModelType) {
    ModelType[ModelType["ACL"] = 0] = "ACL";
    ModelType[ModelType["RBAC"] = 1] = "RBAC";
})(ModelType || (exports.ModelType = ModelType = {}));
let Rbac = class Rbac {
};
exports.Rbac = Rbac;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], Rbac.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: 'guest' }),
    __metadata("design:type", String)
], Rbac.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', array: true, default: [false, false, false, false] }),
    __metadata("design:type", Array)
], Rbac.prototype, "permission", void 0);
exports.Rbac = Rbac = __decorate([
    (0, typeorm_1.Entity)('rbacs')
], Rbac);
let Acl = class Acl {
};
exports.Acl = Acl;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], Acl.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: 'guest' }),
    __metadata("design:type", String)
], Acl.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: '' }),
    __metadata("design:type", String)
], Acl.prototype, "resource", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', array: true, default: [false, false, false, false] }),
    __metadata("design:type", Array)
], Acl.prototype, "permission", void 0);
exports.Acl = Acl = __decorate([
    (0, typeorm_1.Entity)('acls')
], Acl);
const rulesModel = (type) => {
    if (type === ModelType.RBAC)
        return Rbac;
    return Acl;
};
exports.rulesModel = rulesModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkI7QUFDM0IscUNBQWlFO0FBRWpFLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix1Q0FBTyxDQUFBO0lBQ1AseUNBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxTQUFTLHlCQUFULFNBQVMsUUFHcEI7QUFHTSxJQUFNLElBQUksR0FBVixNQUFNLElBQUk7Q0FPaEIsQ0FBQTtBQVBZLG9CQUFJO0FBRWY7SUFEQyxJQUFBLGdDQUFzQixFQUFDLE1BQU0sQ0FBQzs7aUNBQ25CO0FBRVo7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7a0NBQ2pDO0FBRWI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQzs7d0NBQzFEO2VBTlgsSUFBSTtJQURoQixJQUFBLGdCQUFNLEVBQUMsT0FBTyxDQUFDO0dBQ0gsSUFBSSxDQU9oQjtBQUdNLElBQU0sR0FBRyxHQUFULE1BQU0sR0FBRztDQVNmLENBQUE7QUFUWSxrQkFBRztBQUVkO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O2dDQUNuQjtBQUVaO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7O2lDQUNqQztBQUViO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7O3FDQUN4QjtBQUVqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDOzt1Q0FDMUQ7Y0FSWCxHQUFHO0lBRGYsSUFBQSxnQkFBTSxFQUFDLE1BQU0sQ0FBQztHQUNGLEdBQUcsQ0FTZjtBQUdNLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBZSxFQUFFLEVBQUU7SUFDNUMsSUFBSSxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN6QyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUhXLFFBQUEsVUFBVSxjQUdyQiJ9