import { FunctionComponent } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"


const UserSettingsDetail: FunctionComponent = () => {
    return (
        <div className="flex items-start gap-[10px] w-full">
            {/* User Information */}
            <div className="basis-1/2 flex flex-col items-start gap-[10px] ">
                <div className="flex flex-col w-[725px] items-start gap-[20px] p-[10px] bg-[#303237] rounded-[10px] ">
                    <div className="h-[20px] mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] text-[#ffffff] text-[14px] leading-[15.7px]">
                        User Information
                    </div>

                    <div className="flex items-center gap-[14.79px] w-full">
                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" type="text" placeholder="Please enter your username" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>

                        <div className="basis-1/2 h-[49.9px]">
                            <div className="w-[320px] h-[32px]">
                                <Label htmlFor="mail">Mail</Label>
                                <Input id="mail" type="email" placeholder="Please enter your eMail" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                            </div>
                        </div>
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
                    </div>
                </div>

                <div className="flex flex-col w-[725px] h-[100px] items-start gap-[20px] p-[10px] bg-[#303237] rounded-[10px]">
                    <div className="h-[20px] mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] text-[#ffffff] text-[14px] leading-[15.7px]">
                        User permissions
                    </div>

                    <div className="flex items-start gap-[10px]">
                        <div className="flex w-[100px] items-center justify-center px-[5px] py-[3px] bg-[#6c72ff40] rounded-[2px] border border-solid border-[#5215ea]">
                            <div className="flex items-center gap-[4px]">
                                <div className="flex items-start pl-0 pr-[0.28px] py-0">
                                    <div className=" w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#6c72ff] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                        ADMIN
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[100px] px-[5px] py-[3px] bg-[#a615ea40] border-[#a615ea] items-center justify-center rounded-[2px] border border-solid">
                            <div className="flex items-center gap-[4px]">
                                <div className="flex items-start pl-0 pr-[0.28px] py-0">
                                    <div className=" w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a615ea] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                        MODERATOR
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[100px] px-[5px] py-[3px] bg-[#6cffe540] border-[#6cffe4] items-center justify-center rounded-[2px] border border-solid">
                            <div className="flex items-center gap-[4px]">
                                <div className="flex items-start pl-0 pr-[0.28px] py-0">
                                    <div className=" w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#6cffe4] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                        ANALYST
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[725px] h-[100px] items-start gap-[20px] p-[10px] bg-[#303237] rounded-[10px]">
                    <div className="h-[20px] mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] text-[#ffffff] text-[14px] leading-[15.7px]">
                        User licenses
                    </div>

                    <div className="flex items-start gap-[10px]">
                        <div className="flex p-[5px] bg-[#5215ea40] border-[#5215ea] items-center justify-center rounded-[2px] border border-solid">
                            <div className="flex items-center gap-[4px]">
                                <div className="flex items-start pl-0 pr-[0.28px] py-0">
                                    <div className=" w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffff] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                        FIFA • EPREMIERLEAGUE
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex p-[5px] bg-[#36ff0040] border-[#36ff00] items-center justify-center rounded-[2px] border border-solid">
                            <div className="flex items-center gap-[4px]">
                                <div className="flex items-start pl-0 pr-[0.28px] py-0">
                                    <div className=" w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffff] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                        PADEL • CHAMPIONSCUP
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-[10px] ">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="signUp" />
                        <Label htmlFor="signUp" >SIGN UP FOR NEWSLETER</Label>
                    </div>

                    <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                        <Button>SAVE CHANGES</Button>
                    </div>

                    <div className="w-[225px] [font-family:'Manrope-Medium',Helvetica] text-[#d9d9d9] text-[10px] ">Reset</div>
                </div>
            </div>

            {/* Security - Password */}
            <div className="basis-1/2 flex flex-col items-start gap-[10px] ">
                <div className="flex flex-col w-[700px] items-start justify-center gap-[20px] p-[10px] bg-[#303237] rounded-[10px]">
                    <div className="h-[20px] mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] text-[#ffffff] text-[14px] leading-[15.7px]">
                        Security &amp; Password
                    </div>

                    <div className="flex flex-col items-end gap-[14.79px]">
                        <div className="flex items-center gap-[14.79px] w-full">
                            <div className="h-[49.9px]">
                                <div className="w-[320px] h-[32px]">
                                    <Label htmlFor="currentPassword">Enter current password</Label>
                                    <Input id="currentPassword" type="password" placeholder="Please enter your username" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-[14.79px] w-full">
                            <div className="basis-1/2 h-[49.9px]">
                                <div className="w-[320px] h-[32px]">
                                    <Label htmlFor="newPassword">Set new password</Label>
                                    <Input id="newPassword" type="password" placeholder="Please enter your eMail" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                                </div>
                            </div>

                            <div className="basis-1/2 h-[49.9px]">
                                <div className="w-[320px] h-[32px]">
                                    <Label htmlFor="repeatPassword">Repeat new password</Label>
                                    <Input id="repeatPassword" type="password" placeholder="Please enter your eMail" className="h-[32px]rounded-[4.93px] border-[0.62px] border-solid border-[#d9d9d9] bg-[#414141]" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-[14.79px] w-full">
                            <div className="h-[49.9px]">
                                <Button className="mr-[15px]">SAVE CHANGES</Button>
                                <Button>RESET PASSWORD</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSettingsDetail
