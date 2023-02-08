import { test, expect } from "vitest";
import * as url from 'url'
import path from 'path'

import type { MetaCheckerOptions } from 'vue-component-meta'
import { createComponentMetaChecker } from 'vue-component-meta'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const checkerOptions: MetaCheckerOptions = {
  forceUseTs: true,
  schema: { ignore: ['MyIgnoredNestedProps'] },
  printer: { newLine: 1 },
}

const tsconfigChecker = createComponentMetaChecker(
  // Write your tsconfig path
  path.join(__dirname, '../tsconfig.json'),
  checkerOptions,
)


test("extract props from Vue component file  ", () => {
    const componentPath = path.join(__dirname, 'components/Button.vue');
    const meta = tsconfigChecker.getComponentMeta(componentPath);
    console.log(meta.props)
    console.log(meta.slots)
    console.log(meta.events)
    expect(meta).toMatchSnapshot()
    }
);
