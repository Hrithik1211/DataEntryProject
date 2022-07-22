import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from './custom/modal';
import Form from './custom/form';
import { getFirebaseData } from './custom/action';
import Card from './custom/card';
function App() {
  const [modal, setModal] = useState(0);
  const [data, setData] = useState(null)
  const [sort, setSort] = useState({name:'name',type:1})
  const [sortType, setSortType] = useState(1)
  useEffect(() => {
    async function data() {
      let jj = await getFirebaseData();
      jj.sort((j,l) => j[sort.name].localeCompare(l[sort.name])*(sort.type?1:-1))
      setData(jj)
    }
    data()
  },[modal,sort])
  return (
    <div className="App col-12">
      <div className='row'>
        <h2 className='heading'>
          Data Entry
        </h2>
      </div>
      <button className='add-new-button'
      onClick={() => {
        setModal(!modal)
      }}
      >
        Add New
      </button>
      {modal==1 &&
      <Modal modal={modal} setModal={setModal} component={<Form modal={modal} setModal={setModal} />} />
      }
      <div className='display-board'>
        <Card sortType={sortType} setSortType={setSortType} sort={sort} setSort={setSort} data={{name:'NAME',department:'DEPARTMENT', position:'POSITION', role:'ROLE', currentProject:'PROJECT'   }}/>
      {
        data?Object.values(data).map(val => (
          <Card data={val}/>
        ))
        :<div className='spinner-border display-board-spinner'></div>
      }

      </div>
    </div>
  );
}

export default App;
