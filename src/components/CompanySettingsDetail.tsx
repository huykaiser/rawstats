import { FunctionComponent } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"

let userInfosList = [
    {
        id: 1,
        username: 'DasisteinUsername',
        email: 'mail@provider.com',
        role: 'ADMIN'
    },
    {
        id: 2,
        username: 'DasistnocheinUsername',
        email: 'mail@provider.com',
        role: 'ANALYST'
    },
    {
        id: 3,
        username: 'Das ist_ein_dritterName',
        email: 'mail@provider.com',
        role: 'MOD'
    },
];

const CompanySettingsDetail: FunctionComponent = () => {
    return (
        <div className="flex w-[1316px] items-start gap-[10px] mb-[-4.35px] mr-[-33.00px]">
            <div className="flex flex-col items-start gap-[10px] ">
                <div className="flex flex-col w-[725px] items-start gap-[20px] p-[10px] bg-[#303237] rounded-[10px]">
                    <div className="h-[20px] mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] text-[#ffffff] text-[14px] leading-[15.7px]">
                        Main Contact
                    </div>

                    <div className="flex items-center gap-[14.79px] w-full">
                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" type="text" placeholder="Please enter your first name" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>

                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" type="text" placeholder="Please enter your last name" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-[14.79px] w-full">
                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="phoneNumber">Phone Number</Label>
                                <Input id="phoneNumber" type="text" placeholder="Please enter your phone number" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>

                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="mail">Mail</Label>
                                <Input id="mail" type="email" placeholder="Please enter your eMail" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[725px] items-start gap-[20px] p-[10px] bg-[#303237] rounded-[10px]">
                    <div className="h-[20px] mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] text-[#ffffff] text-[14px] leading-[15.7px]">
                        Company Address
                    </div>

                    <div className="flex items-center gap-[14.79px] w-full">
                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" type="text" placeholder="Please enter your first name" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>

                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" type="text" placeholder="Please enter your last name" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-[14.79px] w-full">
                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="street">Street</Label>
                                <Input id="street" type="text" placeholder="Please enter your street name" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>

                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="mail">Additional Info</Label>
                                <Input id="info" type="text" placeholder="Please enter your additional street info" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-[14.79px] w-full">
                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="zipCode">Zip Code</Label>
                                <Input id="zipCode" type="text" placeholder="Please enter your zip code" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>

                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="city">City</Label>
                                <Input id="city" type="text" placeholder="Please enter your city" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-[14.79px] w-full">
                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="phoneNumber">Country</Label>
                                <Input id="phoneNumber" type="text" placeholder="Please enter your country" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="bill" />
                        <Label htmlFor="bill" >Different billing adress?</Label>
                    </div>
                </div>

                <div className="flex flex-col w-[725px] h-[100px] items-start gap-[20px] p-[10px] relative bg-[#303237] rounded-[10px]">
                    <div className="h-[20px] mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] text-[#ffffff] text-[14px] leading-[15.7px]">
                        User Licenses
                    </div>


                    <div className="flex items-start gap-[10px]">
                        <div className="inline-flex items-center justify-center p-[5px] relative flex-[0_0_auto] bg-[#5215ea40] rounded-[2px] border border-solid border-[#5215ea]">
                            <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                                <div className="inline-flex items-start pl-0 pr-[0.28px] py-0 relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffff] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                        FIFA • EPREMIERLEAGUE
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex p-[5px] flex-[0_0_auto] bg-[#36ff0040] border-[#36ff00] items-center justify-center relative rounded-[2px] border border-solid">
                            <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                                <div className="inline-flex items-start pl-0 pr-[0.28px] py-0 relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffff] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                        PADEL • CHAMPIONSCUP
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-[10px] ">
                    <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                        <Button>SAVE CHANGES</Button>
                    </div>

                    <div className="w-[225px] [font-family:'Manrope-Medium',Helvetica] text-[#d9d9d9] text-[10px] ">Reset</div>
                </div>
            </div>

            <div className="-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                <div className="flex flex-col w-[550px] items-start justify-center gap-[20px] p-[10px] bg-[#303237] rounded-[10px]">
                    <div className="h-[20px] mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] text-[#ffffff] text-[14px] leading-[15.7px]">
                        User Information
                    </div>

                    <div className="flex flex-col items-start gap-[10px] w-full">
                        {userInfosList.map(user => (
                            <div key={user.id} className="flex justify-between px-0 py-[5px] w-full border-b [border-bottom-style:solid] border-neutral-700 items-center ">
                                <div className=" w-[24px] h-[24px] bg-[#d9d9d9] rounded-[12px]" />

                                <div className="flex h-[25px] items-center gap-[5px] ">
                                    <div className=" w-[10px] h-[10px] bg-[#36ff00] rounded-[5px]" />

                                    <div className="relative w-[204px] h-[25px] mr-[-4.00px]">
                                        <div className="relative w-[200px] h-[25px]">
                                            <div className="absolute w-[200px] h-[14px] top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffff] text-[10px] tracking-[0] leading-[14px] underline">
                                                {user.username}
                                            </div>

                                            <div className="absolute w-[200px] h-[14px] top-[11px] left-0 [font-family:'Montserrat-Light',Helvetica] font-light text-[#ffffff] text-[10px] tracking-[0] leading-[14px]">
                                                {user.email}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {user.role == 'ADMIN' ? <div className="flex w-[75px] px-[5px] py-[3px] bg-[#5215ea] border-[#6c72ff] items-center justify-center relative rounded-[2px] border border-solid">
                                    <div className="flex items-center gap-[4px]">
                                        <div className="max-w-[4px] w-[4px] max-h-[4px] h-[4px] bg-[#6c72ff] rounded-[4px]" />

                                        <div className="flex items-start pl-0 pr-[0.28px] py-0 ">
                                            <div className=" w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#6c72ff] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                                {user.role}
                                            </div>
                                        </div>
                                    </div>
                                </div> : <></>}

                                {user.role == 'ANALYST' ? <div className="flex w-[75px] px-[5px] py-[3px] bg-[#6cffe540] border-[#6cffe4] items-center justify-center relative rounded-[2px] border border-solid">
                                    <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                                        <div className="bg-[#6cffe4] relative max-w-[4px] w-[4px] max-h-[4px] h-[4px] rounded-[4px]" />
                                        <div className="inline-flex items-start pl-0 pr-[0.28px] py-0 relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#6cffe4] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                                ANALYST
                                            </div>
                                        </div>
                                    </div>
                                </div> : <></>}

                                {user.role == 'MOD' ? <div className="flex w-[75px] px-[5px] py-[3px] bg-[#a615ea40] border-[#be6cff] items-center justify-center relative rounded-[2px] border border-solid">
                                    <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                                        <div className="bg-[#be6cff] relative max-w-[4px] w-[4px] max-h-[4px] h-[4px] rounded-[4px]" />
                                        <div className="inline-flex items-start pl-0 pr-[0.28px] py-0 relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#be6cff] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                                MOD
                                            </div>
                                        </div>
                                    </div>
                                </div> : <></>}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-end justify-center gap-[10px] w-full">
                        {/* <div className="inline-flex items-center gap-[10px] p-[5px] relative flex-[0_0_auto] bg-[#303237] rounded-[5px] border border-solid border-[#d7d7d7]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#d7d7d7] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                +
                            </div>
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#d7d7d7] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                ADD NEW USER
                            </div>
                        </div> */}

                        <Button>+ ADD NEW USER</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanySettingsDetail
