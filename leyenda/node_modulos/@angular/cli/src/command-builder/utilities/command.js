"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommandModuleToYargs = exports.demandCommandFailureMessage = void 0;
const command_module_1 = require("../command-module");
exports.demandCommandFailureMessage = `You need to specify a command before moving on. Use '--help' to view the available commands.`;
function addCommandModuleToYargs(localYargs, commandModule, context) {
    const cmd = new commandModule(context);
    const { args: { options: { jsonHelp }, }, workspace, } = context;
    const describe = jsonHelp ? cmd.fullDescribe : cmd.describe;
    return localYargs.command({
        command: cmd.command,
        aliases: cmd.aliases,
        describe: 
        // We cannot add custom fields in help, such as long command description which is used in AIO.
        // Therefore, we get around this by adding a complex object as a string which we later parse when generating the help files.
        typeof describe === 'object' ? JSON.stringify(describe) : describe,
        deprecated: cmd.deprecated,
        builder: (argv) => {
            // Skip scope validation when running with '--json-help' since it's easier to generate the output for all commands this way.
            const isInvalidScope = !jsonHelp &&
                ((cmd.scope === command_module_1.CommandScope.In && !workspace) ||
                    (cmd.scope === command_module_1.CommandScope.Out && workspace));
            if (isInvalidScope) {
                throw new command_module_1.CommandModuleError(`This command is not available when running the Angular CLI ${workspace ? 'inside' : 'outside'} a workspace.`);
            }
            return cmd.builder(argv);
        },
        handler: (args) => cmd.handler(args),
    });
}
exports.addCommandModuleToYargs = addCommandModuleToYargs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvY2xpL3NyYy9jb21tYW5kLWJ1aWxkZXIvdXRpbGl0aWVzL2NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7O0FBR0gsc0RBTTJCO0FBRWQsUUFBQSwyQkFBMkIsR0FBRyw4RkFBOEYsQ0FBQztBQUsxSSxTQUFnQix1QkFBdUIsQ0FDckMsVUFBbUIsRUFDbkIsYUFBZ0IsRUFDaEIsT0FBdUI7SUFFdkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsTUFBTSxFQUNKLElBQUksRUFBRSxFQUNKLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUN0QixFQUNELFNBQVMsR0FDVixHQUFHLE9BQU8sQ0FBQztJQUVaLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUU1RCxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDeEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1FBQ3BCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztRQUNwQixRQUFRO1FBQ04sOEZBQThGO1FBQzlGLDRIQUE0SDtRQUM1SCxPQUFPLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFDcEUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1FBQzFCLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2hCLDRIQUE0SDtZQUM1SCxNQUFNLGNBQWMsR0FDbEIsQ0FBQyxRQUFRO2dCQUNULENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLDZCQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUM1QyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssNkJBQVksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVuRCxJQUFJLGNBQWMsRUFBRTtnQkFDbEIsTUFBTSxJQUFJLG1DQUFrQixDQUMxQiw4REFDRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FDekIsZUFBZSxDQUNoQixDQUFDO2FBQ0g7WUFFRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFZLENBQUM7UUFDdEMsQ0FBQztRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDckMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQTFDRCwwREEwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgQXJndiB9IGZyb20gJ3lhcmdzJztcbmltcG9ydCB7XG4gIENvbW1hbmRDb250ZXh0LFxuICBDb21tYW5kTW9kdWxlLFxuICBDb21tYW5kTW9kdWxlRXJyb3IsXG4gIENvbW1hbmRNb2R1bGVJbXBsZW1lbnRhdGlvbixcbiAgQ29tbWFuZFNjb3BlLFxufSBmcm9tICcuLi9jb21tYW5kLW1vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBkZW1hbmRDb21tYW5kRmFpbHVyZU1lc3NhZ2UgPSBgWW91IG5lZWQgdG8gc3BlY2lmeSBhIGNvbW1hbmQgYmVmb3JlIG1vdmluZyBvbi4gVXNlICctLWhlbHAnIHRvIHZpZXcgdGhlIGF2YWlsYWJsZSBjb21tYW5kcy5gO1xuZXhwb3J0IHR5cGUgQ29tbWFuZE1vZHVsZUNvbnN0cnVjdG9yID0gUGFydGlhbDxDb21tYW5kTW9kdWxlSW1wbGVtZW50YXRpb24+ICYge1xuICBuZXcgKGNvbnRleHQ6IENvbW1hbmRDb250ZXh0KTogUGFydGlhbDxDb21tYW5kTW9kdWxlSW1wbGVtZW50YXRpb24+ICYgQ29tbWFuZE1vZHVsZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tYW5kTW9kdWxlVG9ZYXJnczxUIGV4dGVuZHMgb2JqZWN0LCBVIGV4dGVuZHMgQ29tbWFuZE1vZHVsZUNvbnN0cnVjdG9yPihcbiAgbG9jYWxZYXJnczogQXJndjxUPixcbiAgY29tbWFuZE1vZHVsZTogVSxcbiAgY29udGV4dDogQ29tbWFuZENvbnRleHQsXG4pOiBBcmd2PFQ+IHtcbiAgY29uc3QgY21kID0gbmV3IGNvbW1hbmRNb2R1bGUoY29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBhcmdzOiB7XG4gICAgICBvcHRpb25zOiB7IGpzb25IZWxwIH0sXG4gICAgfSxcbiAgICB3b3Jrc3BhY2UsXG4gIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IGRlc2NyaWJlID0ganNvbkhlbHAgPyBjbWQuZnVsbERlc2NyaWJlIDogY21kLmRlc2NyaWJlO1xuXG4gIHJldHVybiBsb2NhbFlhcmdzLmNvbW1hbmQoe1xuICAgIGNvbW1hbmQ6IGNtZC5jb21tYW5kLFxuICAgIGFsaWFzZXM6IGNtZC5hbGlhc2VzLFxuICAgIGRlc2NyaWJlOlxuICAgICAgLy8gV2UgY2Fubm90IGFkZCBjdXN0b20gZmllbGRzIGluIGhlbHAsIHN1Y2ggYXMgbG9uZyBjb21tYW5kIGRlc2NyaXB0aW9uIHdoaWNoIGlzIHVzZWQgaW4gQUlPLlxuICAgICAgLy8gVGhlcmVmb3JlLCB3ZSBnZXQgYXJvdW5kIHRoaXMgYnkgYWRkaW5nIGEgY29tcGxleCBvYmplY3QgYXMgYSBzdHJpbmcgd2hpY2ggd2UgbGF0ZXIgcGFyc2Ugd2hlbiBnZW5lcmF0aW5nIHRoZSBoZWxwIGZpbGVzLlxuICAgICAgdHlwZW9mIGRlc2NyaWJlID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGRlc2NyaWJlKSA6IGRlc2NyaWJlLFxuICAgIGRlcHJlY2F0ZWQ6IGNtZC5kZXByZWNhdGVkLFxuICAgIGJ1aWxkZXI6IChhcmd2KSA9PiB7XG4gICAgICAvLyBTa2lwIHNjb3BlIHZhbGlkYXRpb24gd2hlbiBydW5uaW5nIHdpdGggJy0tanNvbi1oZWxwJyBzaW5jZSBpdCdzIGVhc2llciB0byBnZW5lcmF0ZSB0aGUgb3V0cHV0IGZvciBhbGwgY29tbWFuZHMgdGhpcyB3YXkuXG4gICAgICBjb25zdCBpc0ludmFsaWRTY29wZSA9XG4gICAgICAgICFqc29uSGVscCAmJlxuICAgICAgICAoKGNtZC5zY29wZSA9PT0gQ29tbWFuZFNjb3BlLkluICYmICF3b3Jrc3BhY2UpIHx8XG4gICAgICAgICAgKGNtZC5zY29wZSA9PT0gQ29tbWFuZFNjb3BlLk91dCAmJiB3b3Jrc3BhY2UpKTtcblxuICAgICAgaWYgKGlzSW52YWxpZFNjb3BlKSB7XG4gICAgICAgIHRocm93IG5ldyBDb21tYW5kTW9kdWxlRXJyb3IoXG4gICAgICAgICAgYFRoaXMgY29tbWFuZCBpcyBub3QgYXZhaWxhYmxlIHdoZW4gcnVubmluZyB0aGUgQW5ndWxhciBDTEkgJHtcbiAgICAgICAgICAgIHdvcmtzcGFjZSA/ICdpbnNpZGUnIDogJ291dHNpZGUnXG4gICAgICAgICAgfSBhIHdvcmtzcGFjZS5gLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY21kLmJ1aWxkZXIoYXJndikgYXMgQXJndjxUPjtcbiAgICB9LFxuICAgIGhhbmRsZXI6IChhcmdzKSA9PiBjbWQuaGFuZGxlcihhcmdzKSxcbiAgfSk7XG59XG4iXX0=