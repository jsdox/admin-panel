import Sidebar from '@/Layouts/Sidebar';
import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Link } from 'react-router-dom';
import { PaperClipIcon } from '@heroicons/react/solid'
import NavLink from '../Components/NavLink';

import { useHistory } from "react-router-dom";

  const actual_gender = [
    { id: 1, name: 'Non binary'},
    { id: 2, name: 'Agender'},
    { id: 3, name: 'Intersex'},
    { id: 4, name: 'Third gender'},
    { id: 5, name: 'Transgender'},
    { id: 6, name: 'Trans man'},
    { id: 7, name: 'Trans woman'},
    { id: 8, name: 'Other'},
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  let styles = {
    paddingLeft: '22px',
  };
export default function UserDetail(props) {

    const user = props.data[0];
    const tabs = [
        { name: 'Profile', href: "/users/" + user.id,  current: true },
        { name: 'Perfect match Q/A', href: '/perfect-match/' + user.id, current: false },
        { name: 'About Q/A', href: '/about/' + user.id, current: false },
        { name: 'Bio Q/A', href: '/bio/' + user.id, current: false },
        { name: 'Life style Q/A', href: '/life-style/' + user.id, current: false },
        { name: 'Liked on Discovery', href: '/dics-liked/' + user.id, count: '', current: false },
        { name: 'Disc queue', href: '/disc-queue/' + user.id, count: '', current: false },
        { name: 'Disc profile', href: '/disc-profile/' + user.id, count: '', current: false },
        { name: 'Conversation', href: '/conversation/' + user.id, count: '', current: false },
      ];
    return (
        <Sidebar>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and other.</p>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        <InertiaLink method="get" href={route('users')}>
                            <strong><u>Back</u></strong>
                        </InertiaLink>
                    </p>
                </div>
                <div>
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                        Select a tab
                        </label>
                        <select
                            id="tabs"
                            name="tabs"
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            defaultValue={tabs.find((tab) => tab.current).name}
                            >
                            {tabs.map((tab) => (
                                <option key={tab.name} href={route('dashboard')}>
                                    {tab.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="hidden sm:block" style={styles}>
                        <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {tabs.map((tab) => (
                            <NavLink
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                tab.current
                                    ? 'border-indigo-500 text-indigo-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                                'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                                {tab.count ? (
                                <span
                                    className={classNames(
                                    tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                                    'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                                    )}
                                >
                                    {tab.count}
                                </span>
                                ) : null}
                            </NavLink>
                            ))}
                        </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.name} {user.last_name}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.phone_number}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">D.O.B</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.dob}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Gender</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {(user.gender == 1 ? 'Male' : 'Female')} {(user.actual_gender) &&
                                '/ ' +  actual_gender[user.actual_gender - 1]['name'] + ' as actual gender'
                                }
                            </dd>
                        </div>

                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Status</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{(user.status == 1 ? 'Active' : 'Reported')}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">ELO score</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.elo_score}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Last login</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.loggedin_at}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Headline</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.headline}</dd>
                        </div>

                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Paused</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{(user.paused) ? 'Yes' : 'No'}</dd>
                        </div>

                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {(user.get_address)? user.get_address.get_city.city + ' / ' + user.get_address.get_country.country : ''}
                            </dd>
                        </div>
                       {(user.get_images) &&
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Images</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                    </li>
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                    </li>
                                </ul> */}

                                <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                    {user.get_images.map((image) => (
                                        <li key={image.id} className="relative">
                                        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                            <img src={image.image} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                                            <button type="button" className="absolute inset-0 focus:outline-none">
                                            {/* <span className="sr-only">View details for {file.title}</span> */}
                                            </button>
                                        </div>
                                        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"></p>
                                        <p className="block text-sm font-medium text-gray-500 pointer-events-none"></p>
                                        </li>
                                    ))}
                                </ul>

                            </dd>
                        </div>
                        }
                    </dl>
                </div>
            </div>



        </Sidebar>
    );
}
