import { createWrapper } from '../utils'
import QuotesList from '@/components/QuotesList'


let wrapper;

window.alert = () => { }

afterEach(() => {
    wrapper.destroy()
});

describe('QuotesList.vue', () => {
    it('renders all quotes', async () => {
        wrapper = createWrapper(QuotesList, {}, {
            state: {
                quotes: [{ text: "1", id: "1" }, { text: "2", id: "2" }]
            }
        })
        expect(wrapper.findAll('.card').length).toBe(2)
    })

    it('"delete" invoked', async () => {
        const deleteAction = jest.fn()
        wrapper = createWrapper(QuotesList, {}, {
            state: {
                quotes: [{ text: "1", id: "1" }],
            },
            actions: {
                delete: deleteAction
            }
        })
        await wrapper.find('.close').trigger('click')
        expect(deleteAction).toHaveBeenCalled()
    })

});
