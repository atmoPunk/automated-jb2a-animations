import * as patreon from "./patreonDB"
import { JB2APATREONDB } from "../jb2a-patreon-database";


export const patreonMerge = {

    async handle(path) {
        let jb2aPatreonVersion = game.modules.get("jb2a_patreon")?.version;
        if (!jb2aPatreonVersion) { return; }

        for (let [version, migration] of Object.entries(this.migrations)) {

            if (!isNewerVersion(jb2aPatreonVersion, version)) {
                if (jb2aPatreonVersion === version) {
                    await migration(path)
                    return;
                }    
                return;
            }
            
            await migration(path)
        }
    },

    migrations: {
        "0.4.7": async (path) => {
            let db047 = await patreon.db047(path);
            foundry.utils.mergeObject(JB2APATREONDB, db047);
        },
        "0.4.8": async (path) => {
            let db048 = await patreon.db048(path);
            foundry.utils.mergeObject(JB2APATREONDB, db048);
        },
        "0.4.9": async (path) => {
            let db049 = await patreon.db049(path);
            foundry.utils.mergeObject(JB2APATREONDB, db049);
        },
        "0.5.0": async (path) => {
            let db050 = await patreon.db050(path);
            foundry.utils.mergeObject(JB2APATREONDB, db050);
        },
        "0.5.1": async (path) => {
            let db051 = await patreon.db051(path);
            foundry.utils.mergeObject(JB2APATREONDB, db051);
        },
        "0.5.2": async (path) => {
            let db052 = await patreon.db052(path);
            foundry.utils.mergeObject(JB2APATREONDB, db052);
        },
        "0.5.3": async (path) => {
            let db053 = await patreon.db053(path);
            foundry.utils.mergeObject(JB2APATREONDB, db053);
        },
    }
}