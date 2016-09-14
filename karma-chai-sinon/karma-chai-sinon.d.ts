// Type definitions for karma-chai-sinon 0.1.5
// Project: https://github.com/tubalmartin/karma-chai-sinon
// Definitions by: Václav Ostrožlík <https://github.com/vasek17>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="chai" />
import Sinon = require("Sinon");

declare var should: Chai.Should;
declare var expect: Chai.ExpectStatic;
declare var assert: Chai.AssertStatic;
declare var sinon: Sinon.SinonStatic;
