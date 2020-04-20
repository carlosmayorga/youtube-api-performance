import { DomSanitazerPipe } from './dom-sanitazer.pipe';

describe('DomSanitazerPipe', () => {
  it('create an instance', () => {
    const pipe = new DomSanitazerPipe();
    expect(pipe).toBeTruthy();
  });
});
