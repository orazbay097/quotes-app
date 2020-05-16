import { createWrapper } from '../utils'
import QuotesCounterProgress from '@/components/QuotesCounterProgress'


let wrapper;

afterEach(() => {
    wrapper.destroy()
});

describe('QuotesCounterProgress.vue', () => {
    it('computes progress width correct', async () => {
        wrapper = createWrapper(QuotesCounterProgress, {}, {
            state: {
                quotes: [{ text: "1", id: "1" }, { text: "2", id: "2" }],
                maxQuotesCount:5
            }
        })
        expect(wrapper.vm.progressWidth).toBe(40)
    })

});
