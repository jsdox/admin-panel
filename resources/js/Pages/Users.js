// import Authenticated from '@/Layouts/Authenticated';
// import React from 'react';

// export default function Dashboard(props) {
//     const user_data = props.data.map((data) => 
//         <li key={data.id}>
//         {data.email}
//         </li>
//     );
//     return (
//         <Authenticated
//             auth={props.auth}
//             errors={props.errors}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
//         >
//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6 bg-white border-b border-gray-200">Users</div>
//                         <ul>{user_data}</ul>
//                     </div>
//                 </div>
//             </div>
//         </Authenticated>
//     );
// }

import Sidebar from '@/Layouts/Sidebar';
import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Link } from 'react-router-dom';

export default function Users(props) {
    console.log(props);
    const people = props.data.data;
    const next_page_url = props.data.next_page_url;
    const prev_page_url = props.data.prev_page_url;
    return (
        <Sidebar>
           <main className="flex-1 relative overflow-y-auto focus:outline-none">
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        {/* Replace with your content */}
                        <div className="py-4">
                            {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                phone
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Gender
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {people.map((person, personIdx) => (
                                            <tr key={person.id} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.phone_number}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.gender === 1 ? 'Male' : 'Female'}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href={route('users')} className="text-indigo-600 hover:text-indigo-900"></a>    
                                                    <InertiaLink method="get" href={route('users')+'/'+person.id}>View</InertiaLink>                                           
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                        </table>

                                        <nav
                                                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                                aria-label="Pagination"
                                                >
                                                {/* <div className="hidden sm:block">
                                                    <p className="text-sm text-gray-700">
                                                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                                    <span className="font-medium">20</span> results
                                                    </p>
                                                </div> */}
                                                <div className="flex-1 flex justify-between sm:justify-end">
                                                    {(prev_page_url) && 
                                                     <InertiaLink
                                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                        method="get"
                                                        href={prev_page_url}>Previous
                                                    </InertiaLink>
                                                    }                                                   
                                                    {(next_page_url) && 
                                                    <InertiaLink
                                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                        method="get"
                                                        href={next_page_url}>Next
                                                    </InertiaLink>
                                                    }
                                                </div>
                                                </nav>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /End replace */}
                    </div>
                </div>
            </main>
        </Sidebar>
    );
}
