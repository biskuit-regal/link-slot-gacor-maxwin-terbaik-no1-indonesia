'use babel';

import LinkSlotGacorMaxwinTerbaikNo1IndonesiaView from './link-slot-gacor-maxwin-terbaik-no1-indonesia-view';
import { CompositeDisposable } from 'atom';

export default {

  linkSlotGacorMaxwinTerbaikNo1IndonesiaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.linkSlotGacorMaxwinTerbaikNo1IndonesiaView = new LinkSlotGacorMaxwinTerbaikNo1IndonesiaView(state.linkSlotGacorMaxwinTerbaikNo1IndonesiaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.linkSlotGacorMaxwinTerbaikNo1IndonesiaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'link-slot-gacor-maxwin-terbaik-no1-indonesia:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.linkSlotGacorMaxwinTerbaikNo1IndonesiaView.destroy();
  },

  serialize() {
    return {
      linkSlotGacorMaxwinTerbaikNo1IndonesiaViewState: this.linkSlotGacorMaxwinTerbaikNo1IndonesiaView.serialize()
    };
  },

  toggle() {
    console.log('LinkSlotGacorMaxwinTerbaikNo1Indonesia was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
