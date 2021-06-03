import Sidebar from '@/Layouts/Sidebar';
import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Link } from 'react-router-dom';
import { PaperClipIcon } from '@heroicons/react/solid'



export default function Bio(props) {
    const data = props.data;
    return (
        <Sidebar>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">About Question and Answers</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                <div key={data.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500"><strong><u>Questions</u></strong></dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><strong><u>Answers</u></strong></dd>
                    </div>
                {data.map((data) => (
                    <div key={data.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">{data.question.question}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.answer}</dd>
                    </div>
                ))
                }
                </dl>
            </div>
            </div>

        </Sidebar>
    );
}
