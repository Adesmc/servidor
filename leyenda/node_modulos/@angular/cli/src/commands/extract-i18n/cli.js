"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const architect_command_module_1 = require("../../command-builder/architect-command-module");
class ExtractI18nCommandModule extends architect_command_module_1.ArchitectCommandModule {
    constructor() {
        super(...arguments);
        this.multiTarget = false;
        this.command = 'extract-i18n [project]';
        this.describe = 'Extracts i18n messages from source code.';
    }
}
exports.default = ExtractI18nCommandModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9jbGkvc3JjL2NvbW1hbmRzL2V4dHJhY3QtaTE4bi9jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7QUFFSCw2RkFBd0Y7QUFHeEYsTUFBcUIsd0JBQ25CLFNBQVEsaURBQXNCO0lBRGhDOztRQUlFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBRyx3QkFBd0IsQ0FBQztRQUNuQyxhQUFRLEdBQUcsMENBQTBDLENBQUM7SUFFeEQsQ0FBQztDQUFBO0FBUkQsMkNBUUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgQXJjaGl0ZWN0Q29tbWFuZE1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1hbmQtYnVpbGRlci9hcmNoaXRlY3QtY29tbWFuZC1tb2R1bGUnO1xuaW1wb3J0IHsgQ29tbWFuZE1vZHVsZUltcGxlbWVudGF0aW9uIH0gZnJvbSAnLi4vLi4vY29tbWFuZC1idWlsZGVyL2NvbW1hbmQtbW9kdWxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdEkxOG5Db21tYW5kTW9kdWxlXG4gIGV4dGVuZHMgQXJjaGl0ZWN0Q29tbWFuZE1vZHVsZVxuICBpbXBsZW1lbnRzIENvbW1hbmRNb2R1bGVJbXBsZW1lbnRhdGlvblxue1xuICBtdWx0aVRhcmdldCA9IGZhbHNlO1xuICBjb21tYW5kID0gJ2V4dHJhY3QtaTE4biBbcHJvamVjdF0nO1xuICBkZXNjcmliZSA9ICdFeHRyYWN0cyBpMThuIG1lc3NhZ2VzIGZyb20gc291cmNlIGNvZGUuJztcbiAgbG9uZ0Rlc2NyaXB0aW9uUGF0aD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cbiJdfQ==