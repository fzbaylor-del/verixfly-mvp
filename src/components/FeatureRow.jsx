export default function FeatureRow() {
    return (
        <section className="max-w-md mx-auto px-4 mt-8 mb-12">
            <div className="grid grid-cols-3 gap-4 text-center">
                {/* Transparent Pricing */}
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#eef2f6] w-12 h-12 rounded-full flex items-center justify-center text-xl">
                        🔍
                    </div>
                    <p className="text-xs font-medium text-gray-700 leading-tight">
                        Transparent Pricing
                    </p>
                </div>

                {/* First-Time Flyer Guide */}
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#eef2f6] w-12 h-12 rounded-full flex items-center justify-center text-xl">
                        🧑‍✈️
                    </div>
                    <p className="text-xs font-medium text-gray-700 leading-tight">
                        First-Time Flyer Guide
                    </p>
                </div>

                {/* Booking Protection */}
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#eef2f6] w-12 h-12 rounded-full flex items-center justify-center text-xl">
                        🛡️
                    </div>
                    <p className="text-xs font-medium text-gray-700 leading-tight">
                        Booking Protection
                    </p>
                </div>
            </div>
        </section>
    )
}