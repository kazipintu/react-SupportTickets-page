import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { RiCloseFill, RiRefreshLine } from 'react-icons/ri';

const SupportTicktes = () => {
  return (
    <div className="overflow-x-auto w-full bg-stone-100">
      <div className="container mx-auto py-[20px] text-[#07242B] border-b border-[#07242B]">
        <h1 className="pb-[20px] font-bold">Support Tickets</h1>
        <div className="flex justify-between items-center">
          <h1 className="pt-[20px] font-bold">7 Records</h1>
          <div className="flex justify-end items-center">
            <input placeholder="All" type="text" name="" className="relative border-2 border-stone-300 bg-stone-100 min-h-12 rounded-lg pl-2 w-[180px]" />
            <IoMdArrowDropdown className="absolute size-8" />
          </div>
        </div>
      </div>
      <div className='container mx-auto py-[20px] border-b-2'>
        <div className='flex gap-4 justify-end items-center pb-[10px]'>
          <button className="flex justify-center items-center w-[70px] h-[50px] rounded-md bg-white text-[#07242B] border border-[#07242B] "><RiRefreshLine className="size-5" /></button>
          <button className="flex gap-2 justify-center items-center w-[170px] h-[50px] rounded-md bg-[#07242B] text-white text-sm font-semibold">Open New Ticket<FaArrowRight className="size-3" /></button>
          <button className="flex gap-2 justify-center items-center w-[120px] h-[50px] rounded-md bg-white text-[#07242B] border border-[#07242B] text-sm font-bold ">All Tickets<FaArrowRight className="size-3" /></button>
        </div>
        <div className='container'>
          <table className="text-[#07242B] bg-white text-left ">
            <thead className="">
              <tr className="w- border-b border-stone-300">
                <th className="flex gap-2 justify-between items-center ps-[10px] py-[10px] text-sm font-semibold">1 selected <MdDelete className='size-4 text-stone-400' /></th>
                <th className="ps-[20px] py-[10px] font-semibold">Username</th>
                <th className="ps-[20px] py-[10px] font-semibold">Tickets</th>
                <th className="ps-[20px] py-[10px] font-semibold">Related Projects</th>
                <th className="ps-[20px] py-[10px] font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-300">
                <td className="flex gap-6 justify-start items-center  ps-[10px] pt-[20px] pb-[20px]"><input type="checkbox" /><img className='w-[25px] h-[25px] rounded-full' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="" /></td>
                <td className="ps-[20px] pt-[20px] pb-[20px] font-semibold">Anita</td>
                <td className="ps-[20px] pt-[20px] pb-[20px] text-sm">[H FGH-495-612] Website not loading : whatworks </td>
                <td className="ps-[20px] pt-[20px] pb-[20px] text-sm">Bidder: 12[United Kingdom] whatworks </td>
                <td className='ps-[20px] pt-[10px] pb-[10px] text-sm'>
                  <button className="flex gap-2 justify-center items-center w-[165px] h-[35px] rounded-md bg-stone-500 text-white text-sm font-semibold"><RiCloseFill className="size-5 rounded-md text-[#07242B] bg-white" />Open New Ticket</button>
                </td>
              </tr>

              <tr className="border-b border-stone-300">
                <td className="flex gap-6 justify-start items-center  ps-[10px] pt-[20px] pb-[20px]"><input type="checkbox" /><img className='w-[25px] h-[25px] rounded-full' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="" /></td>
                <td className="ps-[20px] pt-[20px] pb-[20px] font-semibold">Anita</td>
                <td className="ps-[20px] pt-[20px] pb-[20px] text-sm">[H FGH-495-612] Website not loading : whatworks </td>
                <td className="ps-[20px] pt-[20px] pb-[20px] text-sm">Bidder: 12[United Kingdom] whatworks </td>
                <td className='ps-[20px] pt-[10px] pb-[10px] text-sm'>
                  <button className="w-[140px] h-[35px] rounded-md bg-[#00A770] text-white text-sm font-semibold">Closed</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

export default SupportTicktes;