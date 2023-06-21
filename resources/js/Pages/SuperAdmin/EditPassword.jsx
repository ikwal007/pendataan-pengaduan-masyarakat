import Seo from "@/Components/Seo/Seo";
import LogedLayouts from "@/Layouts/loged-layouts";
import React from "react";
import { Link, useForm } from "@inertiajs/react";
import { AiFillCaretLeft } from "react-icons/ai";

const EditPassword = (props) => {
    const { data, setData, patch, processing, errors, setError, reset } =
        useForm({
            new_password: "",
            re_password: "",
        });

    const validatePasswords = () => {
        if (data.new_password !== data.re_password) {
            setError({
                re_password: "The passwords do not match.",
            });
        } else {
            setError({
                re_password: null,
            });
        }
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
        validatePasswords();
    };

    const submit = (e) => {
        e.preventDefault();
        patch(route("super-admin.update", props.dataForShowDetail.id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            
            <section className="relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full">
                <div className="flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between">
                    <div className="overflow-x-auto w-full bg-white p-3 rounded-xl">
                        <Link
                            href={route("super-admin.index")}
                            className="flex items-center mb-8"
                        >
                            <AiFillCaretLeft /> Kembali
                        </Link>
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">
                                Update Password
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Ensure account is using a long, random password
                                to stay secure.
                            </p>
                        </header>
                        <form onSubmit={submit}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">
                                        New Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className="input input-bordered input-success w-full max-w-xs"
                                    name="new_password"
                                    value={data.new_password}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="label">
                                    {errors.new_password && (
                                        <span className="label-text-alt">
                                            {errors.new_password}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">
                                        Re-Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Re-Password"
                                    className="input input-bordered input-success w-full max-w-xs"
                                    name="re_password"
                                    value={data.re_password}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="label">
                                    {data.new_password !== data.re_password && (
                                        <span className="label-text-alt">
                                            {errors.re_password}
                                        </span>
                                    )}
                                </label>
                            </div>

                            <button
                                className="btn btn-success text-white btn-sm"
                                disabled={
                                    processing ||
                                    data.new_password !== data.re_password
                                }
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditPassword;

EditPassword.layout = page => (
    <LogedLayouts>
      <Seo title={`Edit Password Pelayanan from Super Admin Page`} />
      {page}
    </LogedLayouts>
  );
