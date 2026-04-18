import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://ipuuchygackymxqewwmq.supabase.co",
    "sb_publishable_m_aPgRepceu0ZuSB6WWtpg_rNdv_aHY"
);

export default supabase;