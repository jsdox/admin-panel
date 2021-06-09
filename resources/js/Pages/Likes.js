import Sidebar from '@/Layouts/Sidebar';
import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Link } from 'react-router-dom';

export default function Likes(props) {
    const people = props.data.data;
    const next_page_url = props.data.next_page_url;
    const prev_page_url = props.data.prev_page_url;
    let lastItem = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    return (
        <Sidebar>
           <main className="flex-1 relative overflow-y-auto focus:outline-none">
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Likes on discovery({props.data.total})</h1>
                    <InertiaLink method="get" href={route('users')+'/'+lastItem}>
                        <strong><u>Back</u></strong>
                    </InertiaLink>
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
                                                Data source
                                            </th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {people.map((person, personIdx) => (
                                            <tr key={person.profile_id} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.get_liked_users_profile.name} {person.get_liked_users_profile.last_name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.data_source}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href={route('users')} className="text-indigo-600 hover:text-indigo-900"></a>
                                                    <InertiaLink method="get" href={route('users')+'/'+person.profile_id}>View</InertiaLink>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                        </table>

                                        <nav
                                                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                                aria-label="Pagination"
                                                >

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
