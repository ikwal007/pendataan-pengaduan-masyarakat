import Seo from '@/Components/Seo/Seo';
import LogedLayouts from '@/Layouts/loged-layouts';
import React from 'react';

const Show = (props) => {
    console.log(props);
    return (
        <LogedLayouts>
            <Seo title={`Dashboard Admin`} />
            <section className="relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full">
                <div className="flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between">
                    <div className="overflow-x-auto w-full">
                        okook
                    </div>
                </div>
            </section>
        </LogedLayouts>
    );
}

export default Show;
