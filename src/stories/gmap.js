'use strict'

import {storiesOf} from '@storybook/vue'
import {withNotes} from '@storybook/addon-notes'
import {withKnobs, number, text} from '@storybook/addon-knobs'


import GmapEmbed from '../components/gmap-embed'
const exTag = storiesOf('GmapEmbed', module)
exTag.addDecorator(withKnobs)

exTag.add('default', withNotes(`
  特記事項がある場合は
  ここに書く
`)( () => {
  const lat = number('lat', 34.985656)
  const lng = number('lng', 135.758230)
  const apiKey = text('apiKey', 'AIzaSyDQZLnn7sx7D5RIMrNHjL9M4Sxk3IgrdL4')
  return {
    components: {GmapEmbed},
    template: `<gmap-embed lat="${lat}" lng="${lng}" apikey="${apiKey}"></gmap-embed>`,
  }
}))
