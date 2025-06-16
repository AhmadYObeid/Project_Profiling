import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="navbar">
            <nav className="navbar-nav">
                <Link href="/" className="navbar-logo">
                    <Image src="/logo.png" alt="Logo" width={140} height={50} />
                </Link>

                <div className="navbar-actions">
                    {session && session?.user ? (
                        <>
                            <Link href={`/user/${session?.id}`} className="navbar-username">
                                <span>{session?.user?.name}</span>
                            </Link>

                            <form
                                action={async () => {
                                    "use server";
                                    await signOut({ redirectTo: '/' });
                                }}
                            >
                                <button type="submit" className="navbar-button">Logout</button>
                            </form>
                        </>
                    ) : (
                        <form
                            action={async () => {
                                "use server";
                                await signIn('github');
                            }}
                        >
                            <button type="submit" className="navbar-login">Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
