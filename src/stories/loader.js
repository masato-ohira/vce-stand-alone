'use strict'

import {storiesOf} from '@storybook/vue'
import {withNotes} from '@storybook/addon-notes'
import {withKnobs, boolean} from '@storybook/addon-knobs'


import VceLoader from '../components/vce-loader'
const exTag = storiesOf('VceLoader', module)
exTag.addDecorator(withKnobs)

exTag.add('default', withNotes(`
  特記事項がある場合は
  ここに書く
`)( () => {
  const show = boolean('Show',  true)
  return {
    components: {VceLoader},
    template: `<vce-loader show="${show}"></vce-loader>`,
  }
}))
