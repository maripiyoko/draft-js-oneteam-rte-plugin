import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Draft, { EditorState, SelectionState } from 'draft-js';
import isListBlock from '../isListBlock';

chai.use(sinonChai);

describe('isListBlock', () => {
  const beforeRawContentState = {
    entityMap: {},
    blocks: [{
      key: 'item1',
      text: '',
      type: 'ordered-list-item',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }]
  };
  const selection = new SelectionState({
    anchorKey: 'item1',
    anchorOffset: 0,
    focusKey: 'item1',
    focusOffset: 0,
    isBackward: false,
    hasFocus: true
  });
  const contentState = Draft.convertFromRaw(beforeRawContentState);
  const editorState = EditorState.forceSelection(
    EditorState.createWithContent(contentState),
    selection
  );
  it('correct', () => {
    expect(isListBlock(editorState.getCurrentContent().getFirstBlock())).to.equal(true);
  });
});
