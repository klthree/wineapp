package info.michaelbuckner.projects.wineapp.client;

import info.michaelbuckner.projects.wineapp.model.Winery;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient
public interface WineryClient {

    @PostMapping("/winery/v1/")
    public void addWinery(final Winery pWinery);
}
