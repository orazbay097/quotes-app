import { createWrapper} from '../utils'
import QuotesAddForm from '@/components/QuotesAddForm'


let wrapper;

afterEach(() => {
  wrapper.destroy()
});

describe('QuotesAddForm.vue', () => {
  it('validates empty input', async () => {
    wrapper = createWrapper(QuotesAddForm)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.is-invalid').exists()).toBe(true)
  })

  it('succeeds on not empty input', async () => {
    wrapper = createWrapper(QuotesAddForm,{},{
      getters:{
        canAddNew:()=>{}
      }
    })
    wrapper.find("#quoteText").setValue('any value')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.is-invalid').exists()).toBe(false)
  })

  it('"add" action triggers if "canAddNew" and not empty input', async () => {
    const addAction = jest.fn()
    wrapper = createWrapper(QuotesAddForm,{},{
      getters:{
        canAddNew(){
          return true
        }
      },
      actions:{
        add:addAction
      }
    });
    wrapper.find("#quoteText").setValue('any value')
    await wrapper.find('button').trigger('click')
    expect(addAction).toHaveBeenCalled()
  })


});
