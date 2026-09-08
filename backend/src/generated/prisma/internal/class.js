"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.0",
    "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum QuestionType {\n  BOOLEAN\n  INPUT\n  CHECKBOX\n}\n\nmodel Quiz {\n  id        String     @id @default(uuid())\n  title     String\n  createdAt DateTime   @default(now())\n  updatedAt DateTime   @updatedAt\n  questions Question[]\n}\n\nmodel Question {\n  id            String       @id @default(uuid())\n  quizId        String\n  quiz          Quiz         @relation(fields: [quizId], references: [id], onDelete: Cascade)\n  text          String\n  type          QuestionType\n  options       String[]     @default([])\n  correctAnswer Json\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Quiz\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"questions\",\"kind\":\"object\",\"type\":\"Question\",\"relationName\":\"QuestionToQuiz\"}],\"dbName\":null,\"schema\":null},\"Question\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"quizId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"quiz\",\"kind\":\"object\",\"type\":\"Quiz\",\"relationName\":\"QuestionToQuiz\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"QuestionType\"},{\"name\":\"options\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"correctAnswer\",\"kind\":\"scalar\",\"type\":\"Json\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"quiz\",\"questions\",\"_count\",\"Quiz.findUnique\",\"Quiz.findUniqueOrThrow\",\"Quiz.findFirst\",\"Quiz.findFirstOrThrow\",\"Quiz.findMany\",\"data\",\"Quiz.createOne\",\"Quiz.createMany\",\"Quiz.createManyAndReturn\",\"Quiz.updateOne\",\"Quiz.updateMany\",\"Quiz.updateManyAndReturn\",\"create\",\"update\",\"Quiz.upsertOne\",\"Quiz.deleteOne\",\"Quiz.deleteMany\",\"having\",\"_min\",\"_max\",\"Quiz.groupBy\",\"Quiz.aggregate\",\"Question.findUnique\",\"Question.findUniqueOrThrow\",\"Question.findFirst\",\"Question.findFirstOrThrow\",\"Question.findMany\",\"Question.createOne\",\"Question.createMany\",\"Question.createManyAndReturn\",\"Question.updateOne\",\"Question.updateMany\",\"Question.updateManyAndReturn\",\"Question.upsertOne\",\"Question.deleteOne\",\"Question.deleteMany\",\"Question.groupBy\",\"Question.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"quizId\",\"text\",\"QuestionType\",\"type\",\"options\",\"correctAnswer\",\"equals\",\"string_contains\",\"string_starts_with\",\"string_ends_with\",\"array_starts_with\",\"array_ends_with\",\"array_contains\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"in\",\"notIn\",\"has\",\"hasEvery\",\"hasSome\",\"contains\",\"startsWith\",\"endsWith\",\"title\",\"createdAt\",\"updatedAt\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"push\"]"),
    graph: "bhIgCAQAAEcAICwAAEQAMC0AAAkAEC4AAEQAMC8BAAAAAUoBAEUAIUtAAEYAIUxAAEYAIQEAAAABACAKAwAASwAgLAAASAAwLQAAAwAQLgAASAAwLwEARQAhMAEARQAhMQEARQAhMwAASTMiNAAAOAAgNQAASgAgAQMAAGgAIAoDAABLACAsAABIADAtAAADABAuAABIADAvAQAAAAEwAQBFACExAQBFACEzAABJMyI0AAA4ACA1AABKACADAAAAAwAgAQAABAAwAgAABQAgAQAAAAMAIAEAAAABACAIBAAARwAgLAAARAAwLQAACQAQLgAARAAwLwEARQAhSgEARQAhS0AARgAhTEAARgAhAQQAAGcAIAMAAAAJACABAAAKADACAAABACADAAAACQAgAQAACgAwAgAAAQAgAwAAAAkAIAEAAAoAMAIAAAEAIAUEAABmACAvAQAAAAFKAQAAAAFLQAAAAAFMQAAAAAEBCwAADgAgBC8BAAAAAUoBAAAAAUtAAAAAAUxAAAAAAQELAAAQADABCwAAEAAwBQQAAFkAIC8BAE8AIUoBAE8AIUtAAFgAIUxAAFgAIQIAAAABACALAAATACAELwEATwAhSgEATwAhS0AAWAAhTEAAWAAhAgAAAAkAIAsAABUAIAIAAAAJACALAAAVACADAAAAAQAgEgAADgAgEwAAEwAgAQAAAAEAIAEAAAAJACADBQAAVQAgGAAAVwAgGQAAVgAgBywAAEAAMC0AABwAEC4AAEAAMC8BADYAIUoBADYAIUtAAEEAIUxAAEEAIQMAAAAJACABAAAbADAXAAAcACADAAAACQAgAQAACgAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAHAwAAVAAgLwEAAAABMAEAAAABMQEAAAABMwAAADMCNAAAUwAgNYAAAAABAQsAACQAIAYvAQAAAAEwAQAAAAExAQAAAAEzAAAAMwI0AABTACA1gAAAAAEBCwAAJgAwAQsAACYAMAcDAABSACAvAQBPACEwAQBPACExAQBPACEzAABQMyI0AABRACA1gAAAAAECAAAABQAgCwAAKQAgBi8BAE8AITABAE8AITEBAE8AITMAAFAzIjQAAFEAIDWAAAAAAQIAAAADACALAAArACACAAAAAwAgCwAAKwAgAwAAAAUAIBIAACQAIBMAACkAIAEAAAAFACABAAAAAwAgAwUAAEwAIBgAAE4AIBkAAE0AIAksAAA1ADAtAAAyABAuAAA1ADAvAQA2ACEwAQA2ACExAQA2ACEzAAA3MyI0AAA4ACA1AAA5ACADAAAAAwAgAQAAMQAwFwAAMgAgAwAAAAMAIAEAAAQAMAIAAAUAIAksAAA1ADAtAAAyABAuAAA1ADAvAQA2ACEwAQA2ACExAQA2ACEzAAA3MyI0AAA4ACA1AAA5ACAOBQAAOgAgGAAAPwAgGQAAPwAgNgEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAAAABQQEAPgAhQgEAAAAEQwEAAAAERwEAAAABSAEAAAABSQEAAAABBwUAADoAIBgAAD0AIBkAAD0AIDYAAAAzAkEAADwzIkIAAAAzCEMAAAAzCAQ2AQAAAAVEAQAAAAFFAQAAAARGAQAAAAQPBQAAOgAgGAAAOwAgGQAAOwAgNoAAAAABNwEAAAABOAEAAAABOQEAAAABOoAAAAABO4AAAAABPIAAAAABPYAAAAABPoAAAAABP4AAAAABQIAAAAABQYAAAAABCDYCAAAAAT0CAAAAAT4CAAAAAT8CAAAAAUACAAAAAUECADoAIUICAAAABEMCAAAABAw2gAAAAAE3AQAAAAE4AQAAAAE5AQAAAAE6gAAAAAE7gAAAAAE8gAAAAAE9gAAAAAE-gAAAAAE_gAAAAAFAgAAAAAFBgAAAAAEHBQAAOgAgGAAAPQAgGQAAPQAgNgAAADMCQQAAPDMiQgAAADMIQwAAADMIBDYAAAAzAkEAAD0zIkIAAAAzCEMAAAAzCA4FAAA6ACAYAAA_ACAZAAA_ACA2AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAFBAQA-ACFCAQAAAARDAQAAAARHAQAAAAFIAQAAAAFJAQAAAAELNgEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAAAABQQEAPwAhQgEAAAAEQwEAAAAERwEAAAABSAEAAAABSQEAAAABBywAAEAAMC0AABwAEC4AAEAAMC8BADYAIUoBADYAIUtAAEEAIUxAAEEAIQsFAAA6ACAYAABDACAZAABDACA2QAAAAAE9QAAAAAE-QAAAAAE_QAAAAAFAQAAAAAFBQABCACFCQAAAAARDQAAAAAQLBQAAOgAgGAAAQwAgGQAAQwAgNkAAAAABPUAAAAABPkAAAAABP0AAAAABQEAAAAABQUAAQgAhQkAAAAAEQ0AAAAAECDZAAAAAAT1AAAAAAT5AAAAAAT9AAAAAAUBAAAAAAUFAAEMAIUJAAAAABENAAAAABAgEAABHACAsAABEADAtAAAJABAuAABEADAvAQBFACFKAQBFACFLQABGACFMQABGACELNgEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAAAABQQEAPwAhQgEAAAAEQwEAAAAERwEAAAABSAEAAAABSQEAAAABCDZAAAAAAT1AAAAAAT5AAAAAAT9AAAAAAUBAAAAAAUFAAEMAIUJAAAAABENAAAAABANNAAADACBOAAADACBPAAADACAKAwAASwAgLAAASAAwLQAAAwAQLgAASAAwLwEARQAhMAEARQAhMQEARQAhMwAASTMiNAAAOAAgNQAASgAgBDYAAAAzAkEAAD0zIkIAAAAzCEMAAAAzCAw2gAAAAAE3AQAAAAE4AQAAAAE5AQAAAAE6gAAAAAE7gAAAAAE8gAAAAAE9gAAAAAE-gAAAAAE_gAAAAAFAgAAAAAFBgAAAAAEKBAAARwAgLAAARAAwLQAACQAQLgAARAAwLwEARQAhSgEARQAhS0AARgAhTEAARgAhUAAACQAgUQAACQAgAAAAAVUBAAAAAQFVAAAAMwICVQEAAAAEWwEAAAAFBRIAAGoAIBMAAG0AIFIAAGsAIFMAAGwAIFgAAAEAIAFVAQAAAAQDEgAAagAgUgAAawAgWAAAAQAgAAAAAVVAAAAAAQsSAABaADATAABfADBSAABbADBTAABcADBUAABdACBVAABeADBWAABeADBXAABeADBYAABeADBZAABgADBaAABhADAFLwEAAAABMQEAAAABMwAAADMCNAAAUwAgNYAAAAABAgAAAAUAIBIAAGUAIAMAAAAFACASAABlACATAABkACABCwAAaQAwCgMAAEsAICwAAEgAMC0AAAMAEC4AAEgAMC8BAAAAATABAEUAITEBAEUAITMAAEkzIjQAADgAIDUAAEoAIAIAAAAFACALAABkACACAAAAYgAgCwAAYwAgCSwAAGEAMC0AAGIAEC4AAGEAMC8BAEUAITABAEUAITEBAEUAITMAAEkzIjQAADgAIDUAAEoAIAksAABhADAtAABiABAuAABhADAvAQBFACEwAQBFACExAQBFACEzAABJMyI0AAA4ACA1AABKACAFLwEATwAhMQEATwAhMwAAUDMiNAAAUQAgNYAAAAABBS8BAE8AITEBAE8AITMAAFAzIjQAAFEAIDWAAAAAAQUvAQAAAAExAQAAAAEzAAAAMwI0AABTACA1gAAAAAEEEgAAWgAwUgAAWwAwVAAAXQAgWAAAXgAwAAEEAABnACAFLwEAAAABMQEAAAABMwAAADMCNAAAUwAgNYAAAAABBC8BAAAAAUoBAAAAAUtAAAAAAUxAAAAAAQIAAAABACASAABqACADAAAACQAgEgAAagAgEwAAbgAgBgAAAAkAIAsAAG4AIC8BAE8AIUoBAE8AIUtAAFgAIUxAAFgAIQQvAQBPACFKAQBPACFLQABYACFMQABYACECBAYCBQADAQMAAQEEBwAAAAADBQAIGAAJGQAKAAAAAwUACBgACRkACgEDAAEBAwABAwUADxgAEBkAEQAAAAMFAA8YABAZABEGAgEHCAEICwEJDAEKDQEMDwENEQQOEgUPFAEQFgQRFwYUGAEVGQEWGgQaHQcbHgscHwIdIAIeIQIfIgIgIwIhJQIiJwQjKAwkKgIlLAQmLQ0nLgIoLwIpMAQqMw4rNBI"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js")));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map