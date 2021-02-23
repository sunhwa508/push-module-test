export declare class PushModule {
    requestUserPermission(): Promise<boolean | undefined>;
    _updateTokenToServer: () => Promise<string | undefined>;
    _backMessageHandler: () => void;
    _frontMessageHandler: () => void;
    backgroundMessage(): void;
    clickPushMessage(): void;
}
