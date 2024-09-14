import React from 'react';

const PersonalDetails = () => {
    // Populate Day and Year dropdowns
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

    return (
        <div className="bg-gray-100 p-4 w-auto h-[calc(100vh-11rem)] flex items-center justify-center ">

            <div className=" bg-white shadow-md rounded-lg p-6 relative ">
                <div>
                    <h1 className="absolute top-0 left-0 bg-[#036d6bb5] text-lg  tracking-wider rounded-t-lg text-center font-semibold w-full uppercase text-white p-2 ">
                        Personal Details
                    </h1>
                </div>

                <form className="bg-[#036d6b7a] p-4 w-full mt-8">
                    {/* Candidate Name */}
                    <div className="mb-4 flex">
                        <label className="w-3/5 uppercase block text-base font-medium text-white mb-2" htmlFor="candidateName">
                            CANDIDATE NAME
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                        />
                    </div>

                    {/* Father Name */}
                    <div className="mb-4 flex">
                        <label className="w-3/5 uppercase block text-base font-medium text-white mb-2" htmlFor="fatherName">FATHER NAME</label>
                        <input
                            type="text"
                            id="fatherName"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                        />
                    </div>

                    {/* Mother Name */}
                    <div className="mb-4 flex">
                        <label className="w-3/5 uppercase block text-base font-medium text-white mb-2" htmlFor="motherName">MOTHER NAME</label>
                        <input
                            type="text"
                            id="motherName"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                        />
                    </div>
                    

                    {/* Date of Birth */}
                    <div className="mb-4 flex">
                        <label className="w-3/5 uppercase block text-base font-medium text-white mb-2" htmlFor="dob">DATE OF BIRTH</label>
                        <div className="flex w-full space-x-1">
                            {/* Day dropdown */}
                            <select
                                id="day"
                                className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                            >
                                <option>DD</option>
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>

                            {/* Month dropdown */}
                            <select
                                id="month"
                                className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                            >
                                <option >MM</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>

                            {/* Year dropdown */}
                            <select
                                id="year"
                                className="w-1/3 text-center px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                            >
                                <option>YY</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="mb-4 flex">
                        <label className="w-3/5 uppercase block text-base font-medium text-white mb-2" htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                        >
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div className="mb-4 flex">
                        <label className="w-3/5 uppercase block text-base font-medium text-white mb-2" htmlFor="category">Category</label>
                        <select
                            id="category"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                        >
                            <option>Select Category</option>
                            <option>General</option>
                            <option>SC</option>
                            <option>ST</option>
                            <option>OBC</option>
                            <option>EWS</option>
                        </select>
                    </div>

                    
                </form>
            </div>
        </div>
    );
};

export default PersonalDetails;
