"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var users = [
    { id: '1', name: 'John Doe', phoneNumber: '0412345678', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', phoneNumber: '0423456789', email: 'jane@example.com' },
    { id: '3', name: 'Alice Johnson', phoneNumber: '0434567890', email: 'alice@example.com' },
    { id: '4', name: 'Bob Williams', phoneNumber: '0445678901', email: 'bob@example.com' },
    { id: '5', name: 'Charlie Brown', phoneNumber: '0456789012', email: 'charlie@example.com' },
    { id: '6', name: 'Emily Davis', phoneNumber: '0467890123', email: 'emily@example.com' },
    { id: '7', name: 'Frank Miller', phoneNumber: '0478901234', email: 'frank@example.com' },
    { id: '8', name: 'Grace Lee', phoneNumber: '0489012345', email: 'grace@example.com' },
    { id: '9', name: 'Henry Moore', phoneNumber: '0490123456', email: 'henry@example.com' },
    { id: '10', name: 'Isabella Young', phoneNumber: '0401234567', email: 'isabella@example.com' },
];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, users_1, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Seeding users...');
                    // Delete all existing users (optional)
                    return [4 /*yield*/, prisma.user.deleteMany()
                        // Insert seed users
                    ];
                case 1:
                    // Delete all existing users (optional)
                    _a.sent();
                    _i = 0, users_1 = users;
                    _a.label = 2;
                case 2:
                    if (!(_i < users_1.length)) return [3 /*break*/, 5];
                    user = users_1[_i];
                    return [4 /*yield*/, prisma.user.create({
                            data: user,
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log('Seeding completed!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error('Seeding failed:', e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
