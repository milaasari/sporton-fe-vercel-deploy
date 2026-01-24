"use client";

import Image from "next/image";
import Button from "@/app/(landing)/components/ui/button"; 
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const { push } = useRouter
    return (
        <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center mb-9">
            {/* Kontainer Form */}
            <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary py-12 px-[72px]">
                {/* Logo & Deskripsi */}
                <Image 
                    src="/images/logo-admin.svg"
                    alt="logo admin"
                    width={304}
                    height={51}
                    className="mx-auto mb-4"
                />
                <p className="opacity-50 text-sm text-center mb-10">
                    Enter your credentials to access the dashboard
                </p>
                <div className="space-y-5">
                    <div className="input-group-admin">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Please type your email" 
                            className="rounded-lg!"
                        />
                    </div>

                    <div className="input-group-admin mb-8">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="****************" 
                            className="rounded-lg!"
                        />
                    </div>
                    <Button className="w-full rounded-lg! mb-8"
                    onClick={() => push("/admin/products")}>
                        Sign In
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;