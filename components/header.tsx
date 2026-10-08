import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <Show when="signed-out">
        <SignInButton>
          <button>Sign In</button>
        </SignInButton>

        <SignUpButton>
          <button>Sign Up</button>
        </SignUpButton>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
};

export default Header;