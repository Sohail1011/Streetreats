import { ButtonPrincipal } from "../components/ButtonPrincipal"
import { ButtonSecundary } from "../components/ButtonSecundary"

export const Description = () => {
    return (
        <article className="flex flex-col gap-6">
            <h2 className="text-6xl leading-tight font-semibold">Get your <span className="text-persian_red">snacks</span><br />
                Delivery at your <br />
                Doorstep
            </h2>
            <p>Download the app and get our ice cream, snacks, <br /> drinks, pastries van in ~10 minutes.</p>
            <div className="flex gap-4">
                <ButtonPrincipal name="Order Now" />
                <ButtonSecundary name="How it's work" />
            </div>
        </article>
    )
}
