import {ChildASFC} from './Child';

const Parent = () => {
  return <ChildASFC color="red"  onClick={() => console.log('Clicked')}>

  </ChildASFC>
};


export default Parent;