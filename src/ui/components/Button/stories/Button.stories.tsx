import  { Button} from '../Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант внешнего вида кнопки',
      defaultValue: 'contained',
      options: [ 'outlined','text','contained'],
      control: {
        type: 'radio'
      },
    }
  }
}

const Template = (arg) => <Button {...arg} />
export const Default = () =>  Template.bind({});
Default.args = {
  variant: 'outlined',
  value: 'asdad'
}