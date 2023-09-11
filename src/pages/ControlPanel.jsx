import React from 'react';
import { useNavigate } from 'react-router-dom';

const ControlPanel = () => {
    const navigate = useNavigate()

    function navigateToAdd() {
        navigate("/AddProduct");
      }

    function navigateToModify() {
        navigate("/ModifyProduct")
    }

    function navigateToDelete() {
        navigate("/DeleteProduct")
    }

    function navigateToRemove() {
        navigate("/RemoveAdmin")
    }

    function navigateToCreate() {
        navigate("/CreateAdmin")
    }

    function navigateToGrant() {
        navigate("/GrantPermissions")
    }

    function navigateToRemovePermissions() {
        navigate("/RemovePermissions")
    }

    function navigateToGoodReviews() {
        navigate("/GoodReviews")
    }

    function navigateToBadReviews() {
        navigate("/BadReviews")
    }

    function navigateToAllReviews() {
        navigate("/AllReviews")
    }

  return (
    <div className="p-10 flex flex-wrap justify-around">
      <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
        <h2 className="text-[#0062ff] text-xl font-semibold mb-2">ADD PRODUCT</h2>
        <div className='flex flex-col items-start ms-4 text-[#587f69] font-semibold'>
            <button onClick={navigateToAdd}>- Add product</button>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
        <h2 className="text-[#0062ff] text-xl font-semibold mb-2">SEARCH/MODIFY PRODUCT</h2>
        <div className='flex flex-col items-start ms-4 text-[#587f69] font-semibold'>
            <button onClick={navigateToModify}>- Search/Modify product</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
        <h2 className="text-[#0062ff] text-xl font-semibold mb-2">DELETE PRODUCT</h2>
        <div className='flex flex-col items-start ms-4 text-[#587f69] font-semibold'>
            <button onClick={navigateToDelete}>- Delete product</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
        <h2 className="text-[#0062ff] text-xl font-semibold mb-2">ADD ADMINISTRATOR</h2>
        <div className='flex flex-col items-start ms-4 text-[#587f69] font-semibold'>
            <button onClick={navigateToCreate}>- Create administrator user</button>
            <button onClick={navigateToGrant}>- Grant permissions</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
        <h2 className="text-[#0062ff] text-xl font-semibold mb-2">DELETE ADMINISTRATOR</h2>
        <div className='flex flex-col items-start ms-4 text-[#587f69] font-semibold'>
            <button onClick={navigateToRemove}>- Delete administrator user</button>
            <button onClick={navigateToRemovePermissions}>- Remove permissions</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
        <h2 className="text-[#0062ff] text-xl font-semibold mb-2">CHECK REVIEWS</h2>
        <div className='flex flex-col items-start ms-4 text-[#587f69] font-semibold'>
            <button onClick={navigateToGoodReviews}>- Good reviews</button>
            <button onClick={navigateToBadReviews}>- Bad reviews</button>
            <button onClick={navigateToAllReviews}>- All reviews</button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
