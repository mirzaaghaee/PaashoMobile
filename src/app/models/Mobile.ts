import { Profile } from '../models/Profile';

export interface Mobile {
    mobile: string;
    code: string;
    token: string;
    profile: Profile;
}
