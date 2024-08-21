import { Dialog, VerticalLayout, Button } from '@vaadin/react-components';

import { useDialogStore } from 'Frontend/store/menuStore';
 

const MenuDialog1: React.FC = () => {
    const { dialogOpened, closeDialog } = useDialogStore();

    return (
      <Dialog
        aria-label="System maintenance notice"
        opened={dialogOpened}
        onOpenedChanged={(event) => {
          if (!event.detail.value) closeDialog(); // Close the dialog when it loses focus
        }}
      >
        <VerticalLayout
          theme="spacing"
          style={{ width: '300px', maxWidth: '100%', alignItems: 'stretch' }}
        >
          {/* <h1 style={{ margin: 'var(--lumo-space-m) 0', fontSize: '1.5em', fontWeight: 'bold' , }}> */}
         <span className='text-[18px] font-bold'>When to Use it ? </span>
            {/* When to Use it ?
          </h1> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias necessitatibus ab perferendis, debitis voluptatem incidunt quae dolor quisquam officia nisi numquam consectetur veniam alias et totam minus voluptatum quod ducimus. Totam.
          </p>
          <Button onClick={closeDialog} style={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </VerticalLayout>
      </Dialog>
    );
  };
  export default MenuDialog1;